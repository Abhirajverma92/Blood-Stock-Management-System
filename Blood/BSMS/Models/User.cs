using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class User
{
    public int Loginid { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }

    public int? Roleid { get; set; }

    public ulong Status { get; set; }

    public virtual ICollection<Bloodbank> Bloodbanks { get; set; } = new List<Bloodbank>();

    public virtual ICollection<Donor> Donors { get; set; } = new List<Donor>();

    public virtual ICollection<Hospital> Hospitals { get; set; } = new List<Hospital>();

    public virtual ICollection<Receiver> Receivers { get; set; } = new List<Receiver>();

    public virtual Role? Role { get; set; }
}
