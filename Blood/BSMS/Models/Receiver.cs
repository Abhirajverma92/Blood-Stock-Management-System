using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class Receiver
{
    public int Receiverid { get; set; }

    public string? Rname { get; set; }

    public DateOnly? Dob { get; set; }

    public string? Gender { get; set; }

    public string? Email { get; set; }

    public string? Aadharno { get; set; }

    public string? Address { get; set; }

    public string? Contactno { get; set; }

    public int? Loginid { get; set; }

    public int? Cityid { get; set; }

    public virtual City? City { get; set; }

    public virtual User? Login { get; set; }
}
