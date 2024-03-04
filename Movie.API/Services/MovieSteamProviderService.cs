using Azure.Storage;
using Azure.Storage.Blobs;
using Movie.API.Services.IServices;

namespace Movie.API.Services
{
    public class MovieSteamProviderService : IMovieSteamProvider
    {
        private readonly string _storageAccount = "movierentstorageaccount";
        private readonly string _key = "kurn8aDZw8geVClbrHn4KZBqOYVSrhserJNsQA0rADbidpexp3o5QoENQIP9Tk5D1aZEnBmPLa0y+ASt+MDNlA==";
        private readonly string _blobContainerName = "movierentcontainer";
        private readonly string _blobName = "Suffer_ A Journey Through Life I Best Short Films I 36 Awards Wining Short Film. (480p)";

        private readonly BlobContainerClient _blobContainerClient;

        public MovieSteamProviderService()
        {
            var credentials = new StorageSharedKeyCredential(_storageAccount, _key);
            var blobUrl = $"https://{_storageAccount}.blob.core.windows.net";

            BlobServiceClient blobServiceClient = new BlobServiceClient(new Uri(blobUrl), credentials);

            _blobContainerClient = blobServiceClient.GetBlobContainerClient(_blobContainerName);
        }
        public string GetMovieUrl()
        {
            var blobList = _blobContainerClient.GetBlobs();
            var blobItem = blobList.FirstOrDefault();

            var blob = _blobContainerClient.GetBlobClient(blobItem.Name);
            var url = blob.Uri.ToString();

            return url;

        }
    }
}
