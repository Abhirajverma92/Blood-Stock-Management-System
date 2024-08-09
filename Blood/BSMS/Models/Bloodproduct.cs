using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class Bloodproduct
{
    public int Bloodproductid { get; set; }

    public string? Bloodproductname { get; set; }

    public virtual ICollection<Bloodstock> Bloodstocks { get; set; } = new List<Bloodstock>();

    public virtual ICollection<Donationhistory> Donationhistories { get; set; } = new List<Donationhistory>();

    public virtual ICollection<Donor> Donors { get; set; } = new List<Donor>();

    public virtual ICollection<Request> Requests { get; set; } = new List<Request>();
}
