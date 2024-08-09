using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class Hospital
{
    public int Hospitalid { get; set; }

    public string? Hname { get; set; }

    public string? Email { get; set; }

    public string? Location { get; set; }

    public string Licenseno { get; set; } = null!;

    public string? Contactno { get; set; }

    public int? Loginid { get; set; }

    public int? Cityid { get; set; }

    public virtual City? City { get; set; }

    public virtual User? Login { get; set; }

    public string tostring()
    {
        return "" + Hname;
    }
}
