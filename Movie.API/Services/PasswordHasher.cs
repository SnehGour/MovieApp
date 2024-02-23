using Movie.API.Services.IServices;
using System.Security.Cryptography;
using System.Text;

namespace Movie.API.Services
{
    public class PasswordHasher : IPasswordHasher
    {
        public string HashPassword(string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                // Compute hash of the password bytes
                byte[] hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

                // Convert hash bytes to a hexadecimal string
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("x2"));
                }

                return sb.ToString();
            }
        }

        public bool VerifyPassword(string hashedPassword, string providedPassword)
        {
            // Hash the provided password
            string hashedProvidedPassword = HashPassword(providedPassword);

            // Compare the hashed passwords
            return hashedPassword.Equals(hashedProvidedPassword, StringComparison.OrdinalIgnoreCase);
        }
    }
}
