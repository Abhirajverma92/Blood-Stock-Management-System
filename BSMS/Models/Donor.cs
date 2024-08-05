﻿using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class Donor
{
    public int Donorid { get; set; }

    public string? Dname { get; set; }

    public string Adharno { get; set; } = null!;

    public string? Gender { get; set; }

    public string? Address { get; set; }

    public string? Contactno { get; set; }

    public DateOnly? Dob { get; set; }

    public int? Loginid { get; set; }

    public int? Bloodproduct { get; set; }

    public virtual Bloodproduct? BloodproductNavigation { get; set; }

    public virtual ICollection<Donationhistory>? Donationhistories { get; set; } = new List<Donationhistory>();

    public virtual User? Login { get; set; }
}
