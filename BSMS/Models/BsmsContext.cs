using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace BSMS.Models;

public partial class BsmsContext : DbContext
{
    public BsmsContext()
    {
    }

    public BsmsContext(DbContextOptions<BsmsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bloodbank> Bloodbanks { get; set; }

    public virtual DbSet<Bloodproduct> Bloodproducts { get; set; }

    public virtual DbSet<Bloodstock> Bloodstocks { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Donationhistory> Donationhistories { get; set; }

    public virtual DbSet<Donor> Donors { get; set; }

    public virtual DbSet<Hospital> Hospitals { get; set; }

    public virtual DbSet<Receiver> Receivers { get; set; }

    public virtual DbSet<Request> Requests { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3307;user=root;password=root;database=bsms", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.2.0-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Bloodbank>(entity =>
        {
            entity.HasKey(e => e.Bloodbankid).HasName("PRIMARY");

            entity.ToTable("bloodbank");

            entity.HasIndex(e => e.Cityid, "bcityid_idx");

            entity.HasIndex(e => e.Licenseno, "licenseno_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Loginid, "loginid_idx");

            entity.Property(e => e.Bloodbankid).HasColumnName("bloodbankid");
            entity.Property(e => e.Bname)
                .HasMaxLength(100)
                .HasColumnName("bname");
            entity.Property(e => e.Cityid).HasColumnName("cityid");
            entity.Property(e => e.Contactno)
                .HasMaxLength(15)
                .HasColumnName("contactno");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Foundationdate).HasColumnName("foundationdate");
            entity.Property(e => e.Licenseno)
                .HasMaxLength(50)
                .HasColumnName("licenseno");
            entity.Property(e => e.Location)
                .HasMaxLength(100)
                .HasColumnName("location");
            entity.Property(e => e.Loginid).HasColumnName("loginid");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("b'0'")
                .HasColumnType("bit(2)")
                .HasColumnName("status");

            entity.HasOne(d => d.City).WithMany(p => p.Bloodbanks)
                .HasForeignKey(d => d.Cityid)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("bcityid");

            entity.HasOne(d => d.Login).WithMany(p => p.Bloodbanks)
                .HasForeignKey(d => d.Loginid)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("loginid");
        });

        modelBuilder.Entity<Bloodproduct>(entity =>
        {
            entity.HasKey(e => e.Bloodproductid).HasName("PRIMARY");

            entity.ToTable("bloodproduct");

            entity.Property(e => e.Bloodproductid).HasColumnName("bloodproductid");
            entity.Property(e => e.Bloodproductname)
                .HasMaxLength(60)
                .HasColumnName("bloodproductname");
        });

        modelBuilder.Entity<Bloodstock>(entity =>
        {
            entity.HasKey(e => e.Bsid).HasName("PRIMARY");

            entity.ToTable("bloodstock");

            entity.HasIndex(e => e.Bloodproductid, "bloodproductid_idx");

            entity.Property(e => e.Bsid).HasColumnName("bsid");
            entity.Property(e => e.Bloodproductexpiry)
                .HasColumnType("datetime")
                .HasColumnName("bloodproductexpiry");
            entity.Property(e => e.Bloodproductid).HasColumnName("bloodproductid");
            entity.Property(e => e.Lastupdated)
                .HasColumnType("datetime")
                .HasColumnName("lastupdated");
            entity.Property(e => e.Qty).HasColumnName("qty");
            entity.Property(e => e.Unitsavailable).HasColumnName("unitsavailable");

            entity.HasOne(d => d.Bloodproduct).WithMany(p => p.Bloodstocks)
                .HasForeignKey(d => d.Bloodproductid)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("fk_bloodproductid");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.Cityid).HasName("PRIMARY");

            entity.ToTable("city");

            entity.Property(e => e.Cityid).HasColumnName("cityid");
            entity.Property(e => e.Cname)
                .HasMaxLength(45)
                .HasColumnName("cname");
        });

        modelBuilder.Entity<Donationhistory>(entity =>
        {
            entity.HasKey(e => e.DonationId).HasName("PRIMARY");

            entity.ToTable("donationhistory");

            entity.HasIndex(e => e.Bloodproduct, "bloodproduct_idx");

            entity.HasIndex(e => e.Donorid, "donorid_idx");

            entity.Property(e => e.DonationId).HasColumnName("donationId");
            entity.Property(e => e.Bloodproduct).HasColumnName("bloodproduct");
            entity.Property(e => e.Dondate).HasColumnName("dondate");
            entity.Property(e => e.Donorid).HasColumnName("donorid");

            entity.HasOne(d => d.BloodproductNavigation).WithMany(p => p.Donationhistories)
                .HasForeignKey(d => d.Bloodproduct)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("bloodproduct");

            entity.HasOne(d => d.Donor).WithMany(p => p.Donationhistories)
                .HasForeignKey(d => d.Donorid)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("donorid");
        });

        modelBuilder.Entity<Donor>(entity =>
        {
            entity.HasKey(e => e.Donorid).HasName("PRIMARY");

            entity.ToTable("donor");

            entity.HasIndex(e => e.Adharno, "adharno_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Bloodproduct, "bloodproductid_idx");

            entity.HasIndex(e => e.Loginid, "loginid_idx");

            entity.Property(e => e.Donorid).HasColumnName("donorid");
            entity.Property(e => e.Address)
                .HasMaxLength(45)
                .HasColumnName("address");
            entity.Property(e => e.Adharno)
                .HasMaxLength(45)
                .HasColumnName("adharno");
            entity.Property(e => e.Bloodproduct).HasColumnName("bloodproduct");
            entity.Property(e => e.Contactno)
                .HasMaxLength(45)
                .HasColumnName("contactno");
            entity.Property(e => e.Dname)
                .HasMaxLength(100)
                .HasColumnName("dname");
            entity.Property(e => e.Dob).HasColumnName("dob");
            entity.Property(e => e.Gender)
                .HasMaxLength(45)
                .HasColumnName("gender");
            entity.Property(e => e.Loginid).HasColumnName("loginid");

            entity.HasOne(d => d.BloodproductNavigation).WithMany(p => p.Donors)
                .HasForeignKey(d => d.Bloodproduct)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("bloodproductid");

            entity.HasOne(d => d.Login).WithMany(p => p.Donors)
                .HasForeignKey(d => d.Loginid)
                .HasConstraintName("dloginid");
        });

        modelBuilder.Entity<Hospital>(entity =>
        {
            entity.HasKey(e => e.Hospitalid).HasName("PRIMARY");

            entity.ToTable("hospital");

            entity.HasIndex(e => e.Cityid, "hcityid_idx");

            entity.HasIndex(e => e.Loginid, "loginid");

            entity.Property(e => e.Hospitalid).HasColumnName("hospitalid");
            entity.Property(e => e.Cityid).HasColumnName("cityid");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Hname)
                .HasMaxLength(45)
                .HasColumnName("hname");
            entity.Property(e => e.Licenseno)
                .HasMaxLength(45)
                .HasColumnName("licenseno");
            entity.Property(e => e.Location)
                .HasMaxLength(100)
                .HasColumnName("location");
            entity.Property(e => e.Loginid).HasColumnName("loginid");

            entity.HasOne(d => d.City).WithMany(p => p.Hospitals)
                .HasForeignKey(d => d.Cityid)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("hcityid");

            entity.HasOne(d => d.Login).WithMany(p => p.Hospitals)
                .HasForeignKey(d => d.Loginid)
                .HasConstraintName("hospital_ibfk_2");
        });

        modelBuilder.Entity<Receiver>(entity =>
        {
            entity.HasKey(e => e.Receiverid).HasName("PRIMARY");

            entity.ToTable("receiver");

            entity.HasIndex(e => e.Aadharno, "aadharno_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Loginid, "loginid_idx");

            entity.HasIndex(e => e.Cityid, "rcityid_idx");

            entity.Property(e => e.Receiverid).HasColumnName("receiverid");
            entity.Property(e => e.Aadharno)
                .HasMaxLength(45)
                .HasColumnName("aadharno");
            entity.Property(e => e.Address)
                .HasMaxLength(80)
                .HasColumnName("address");
            entity.Property(e => e.Cityid).HasColumnName("cityid");
            entity.Property(e => e.Dob).HasColumnName("dob");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Gender)
                .HasMaxLength(20)
                .HasColumnName("gender");
            entity.Property(e => e.Loginid).HasColumnName("loginid");
            entity.Property(e => e.Rname)
                .HasMaxLength(45)
                .HasColumnName("rname");

            entity.HasOne(d => d.City).WithMany(p => p.Receivers)
                .HasForeignKey(d => d.Cityid)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("rcityid");

            entity.HasOne(d => d.Login).WithMany(p => p.Receivers)
                .HasForeignKey(d => d.Loginid)
                .HasConstraintName("fk_receivers_loginid");
        });

        modelBuilder.Entity<Request>(entity =>
        {
            entity.HasKey(e => e.Requestid).HasName("PRIMARY");

            entity.ToTable("request");

            entity.HasIndex(e => e.Bloodbankid, "rbbid_idx");

            entity.HasIndex(e => e.Bloodproduct, "rbloodproduct_idx");

            entity.Property(e => e.Requestid).HasColumnName("requestid");
            entity.Property(e => e.Bloodbankid).HasColumnName("bloodbankid");
            entity.Property(e => e.Bloodproduct).HasColumnName("bloodproduct");
            entity.Property(e => e.Requestdate).HasColumnName("requestdate");

            entity.HasOne(d => d.Bloodbank).WithMany(p => p.Requests)
                .HasForeignKey(d => d.Bloodbankid)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("rbbid");

            entity.HasOne(d => d.BloodproductNavigation).WithMany(p => p.Requests)
                .HasForeignKey(d => d.Bloodproduct)
                .HasConstraintName("rbloodproduct");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Roleid).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.Property(e => e.Roleid).HasColumnName("roleid");
            entity.Property(e => e.Rolename)
                .HasMaxLength(255)
                .HasColumnName("rolename");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Loginid).HasName("PRIMARY");

            entity.ToTable("user");

            entity.HasIndex(e => e.Roleids, "FKnjp9roe56nhgxjm2d5iuipbdr");

            entity.Property(e => e.Loginid).HasColumnName("loginid");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Roleids).HasColumnName("roleids");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("b'0'")
                .HasColumnType("bit(2)")
                .HasColumnName("status");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");

            entity.HasOne(d => d.RoleidsNavigation).WithMany(p => p.Users)
                .HasForeignKey(d => d.Roleids)
                .HasConstraintName("FKnjp9roe56nhgxjm2d5iuipbdr");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
