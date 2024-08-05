using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class Request
{
    public int Requestid { get; set; }

    public DateOnly? Requestdate { get; set; }

    public int? Bloodproduct { get; set; }

    public int? Bloodbankid { get; set; }

    public virtual Bloodbank? Bloodbank { get; set; }

    public virtual Bloodproduct? BloodproductNavigation { get; set; }
}
