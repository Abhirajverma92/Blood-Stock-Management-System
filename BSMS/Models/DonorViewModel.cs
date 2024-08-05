namespace BSMS.Models
{
    public class DonorViewModel
    {
        public class DonorCreateViewModel
        {
            public string? Dname { get; set; }
            public string Adharno { get; set; } = null!;
            public string? Gender { get; set; }
            public string? Address { get; set; }
            public string? Contactno { get; set; }
            public DateOnly? Dob { get; set; }
            public int Loginid { get; set; }
            public int BloodproductId { get; set; }
        }

    }
}
