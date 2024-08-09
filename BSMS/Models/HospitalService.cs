namespace BSMS.Models
{
    using System.Threading.Tasks;
    using BSMS.services;
    using Microsoft.EntityFrameworkCore;

    public class HospitalService : IHospitalService
    {
        private readonly DbContext _context;

        public HospitalService(DbContext context)
        {
            _context = context;
        }

        public async Task<bool> IsLicenseNumberAvailableAsync(string licenseNumber)
        {
            // Assuming you have a DbSet<Hospital> in your DbContext
            return !await _context.Set<Hospital>().AnyAsync(h => h.Licenseno == licenseNumber);
        }

        // Other methods implementation
    }
}
