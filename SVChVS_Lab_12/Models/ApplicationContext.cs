using Microsoft.EntityFrameworkCore;

#nullable disable

namespace SVChVS_Lab_12
{
    public partial class ApplicationContext : DbContext
    {
        public ApplicationContext()
        {
			Database.EnsureCreated();
		}

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
			Database.EnsureCreated();
		}

        public virtual DbSet<Ring> Rings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=(LocalDB)\MSSQLLocalDB;Database=SVCH;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Cyrillic_General_CI_AS");

            modelBuilder.Entity<Ring>(entity =>
            {
                entity.ToTable("Ring");

                entity.Property(e => e.ID)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
