using ContactUsApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ContactUsMessageApp.Models
{
    public partial class ContactUsAppContext : DbContext
    {
        public ContactUsAppContext()
        {
        }

        public ContactUsAppContext(DbContextOptions<ContactUsAppContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ContactUsMessage> ContactUsMessage { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContactUsMessage>(entity =>
            {
                entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                    .IsRequired();

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Message)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.SubmittedOn)
                    .HasDefaultValue()
                    .HasColumnType("datetime")
                    .IsRequired();
            });
        }
    }
}
