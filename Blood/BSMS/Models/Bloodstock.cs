using System;
using System.Collections.Generic;

namespace BSMS.Models;

public partial class Bloodstock
{
    public int Bsid { get; set; }

    public int Unitsavailable { get; set; }

    public DateTime? Lastupdated { get; set; }

    public DateTime? Bloodproductexpiry { get; set; }

    public int? Qty { get; set; }

    public int? Bloodproductid { get; set; }

    public virtual Bloodproduct? Bloodproduct { get; set; }
}
