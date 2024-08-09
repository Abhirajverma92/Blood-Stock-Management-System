using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class Bloodbank
{
    public int Bloodbankid { get; set; }

    public string? Bname { get; set; }

    public string? Email { get; set; }

    public string? Location { get; set; }

    public string Licenseno { get; set; } = null!;

    public DateOnly? Foundationdate { get; set; }

    public ulong? Status { get; set; }

    public string? Contactno { get; set; }

    public int? Loginid { get; set; }

    public int? Cityid { get; set; }

    public virtual City? City { get; set; }

    public virtual User? Login { get; set; }

    public virtual ICollection<Request> Requests { get; set; } = new List<Request>();
}
