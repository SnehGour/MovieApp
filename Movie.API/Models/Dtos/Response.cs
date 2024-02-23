namespace Movie.API.Models.Dtos
{
    public class Response
    {
        public Object? Result { get; set; }
        public bool IsSuccess { get; set; } = false;
        public string? Message { get; set; }
    }
}
