using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class City
{
    public int Cityid { get; set; }

    public string? Cname { get; set; }

    public virtual ICollection<Bloodbank>? Bloodbanks { get; set; } = new List<Bloodbank>();

    public virtual ICollection<Hospital>? Hospitals { get; set; } = new List<Hospital>();

    public virtual ICollection<Receiver>? Receivers { get; set; } = new List<Receiver>();
}
