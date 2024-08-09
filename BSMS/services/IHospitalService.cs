namespace BSMS.services
{
    public interface IHospitalService
    {
        
            Task<bool> IsLicenseNumberAvailableAsync(string licenseNumber);
            // Other methods related to hospital operations
        
    }
}
