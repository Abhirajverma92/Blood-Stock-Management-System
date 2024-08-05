using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class Donationhistory
{
    public int DonationId { get; set; }

    public DateOnly? Dondate { get; set; }

    public int? Bloodproduct { get; set; }

    public int? Donorid { get; set; }

    public virtual Bloodproduct? BloodproductNavigation { get; set; }

    public virtual Donor? Donor { get; set; }
}
