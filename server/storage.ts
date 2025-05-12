import { 
  User, InsertUser, users,
  TeamMember, InsertTeamMember, teamMembers,
  TreatmentCategory, InsertTreatmentCategory, treatmentCategories,
  Treatment, InsertTreatment, treatments,
  Specialization, InsertSpecialization, specializations,
  BlogPost, InsertBlogPost, blogPosts,
  Appointment, InsertAppointment, appointments,
  ContactMessage, InsertContactMessage, contactMessages
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Team Member operations
  getAllTeamMembers(): Promise<TeamMember[]>;
  getTeamMemberById(id: number): Promise<TeamMember | undefined>;
  createTeamMember(teamMember: InsertTeamMember): Promise<TeamMember>;
  
  // Treatment Category operations
  getAllTreatmentCategories(): Promise<TreatmentCategory[]>;
  getTreatmentCategoryBySlug(slug: string): Promise<TreatmentCategory | undefined>;
  createTreatmentCategory(category: InsertTreatmentCategory): Promise<TreatmentCategory>;
  
  // Treatment operations
  getAllTreatments(): Promise<Treatment[]>;
  getTreatmentsByCategory(categoryId: number): Promise<Treatment[]>;
  getTreatmentBySlug(slug: string): Promise<Treatment | undefined>;
  createTreatment(treatment: InsertTreatment): Promise<Treatment>;
  
  // Specialization operations
  getAllSpecializations(): Promise<Specialization[]>;
  getSpecializationBySlug(slug: string): Promise<Specialization | undefined>;
  createSpecialization(specialization: InsertSpecialization): Promise<Specialization>;
  
  // Blog Post operations
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  
  // Appointment operations
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAllAppointments(): Promise<Appointment[]>;
  
  // Contact Message operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private teamMembers: Map<number, TeamMember>;
  private treatmentCategories: Map<number, TreatmentCategory>;
  private treatments: Map<number, Treatment>;
  private specializations: Map<number, Specialization>;
  private blogPosts: Map<number, BlogPost>;
  private appointments: Map<number, Appointment>;
  private contactMessages: Map<number, ContactMessage>;
  
  private currentUserId: number;
  private currentTeamMemberId: number;
  private currentTreatmentCategoryId: number;
  private currentTreatmentId: number;
  private currentSpecializationId: number;
  private currentBlogPostId: number;
  private currentAppointmentId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.teamMembers = new Map();
    this.treatmentCategories = new Map();
    this.treatments = new Map();
    this.specializations = new Map();
    this.blogPosts = new Map();
    this.appointments = new Map();
    this.contactMessages = new Map();
    
    this.currentUserId = 1;
    this.currentTeamMemberId = 1;
    this.currentTreatmentCategoryId = 1;
    this.currentTreatmentId = 1;
    this.currentSpecializationId = 1;
    this.currentBlogPostId = 1;
    this.currentAppointmentId = 1;
    this.currentContactMessageId = 1;
    
    // Initialize with seed data
    this.seedData();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Team Member operations
  async getAllTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values())
      .sort((a, b) => a.order - b.order);
  }

  async getTeamMemberById(id: number): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(teamMember: InsertTeamMember): Promise<TeamMember> {
    const id = this.currentTeamMemberId++;
    const newTeamMember = { ...teamMember, id };
    this.teamMembers.set(id, newTeamMember);
    return newTeamMember;
  }

  // Treatment Category operations
  async getAllTreatmentCategories(): Promise<TreatmentCategory[]> {
    return Array.from(this.treatmentCategories.values())
      .sort((a, b) => a.order - b.order);
  }

  async getTreatmentCategoryBySlug(slug: string): Promise<TreatmentCategory | undefined> {
    return Array.from(this.treatmentCategories.values()).find(
      (category) => category.slug === slug,
    );
  }

  async createTreatmentCategory(category: InsertTreatmentCategory): Promise<TreatmentCategory> {
    const id = this.currentTreatmentCategoryId++;
    const newCategory = { ...category, id };
    this.treatmentCategories.set(id, newCategory);
    return newCategory;
  }

  // Treatment operations
  async getAllTreatments(): Promise<Treatment[]> {
    return Array.from(this.treatments.values())
      .sort((a, b) => a.order - b.order);
  }

  async getTreatmentsByCategory(categoryId: number): Promise<Treatment[]> {
    return Array.from(this.treatments.values())
      .filter((treatment) => treatment.categoryId === categoryId)
      .sort((a, b) => a.order - b.order);
  }

  async getTreatmentBySlug(slug: string): Promise<Treatment | undefined> {
    return Array.from(this.treatments.values()).find(
      (treatment) => treatment.slug === slug,
    );
  }

  async createTreatment(treatment: InsertTreatment): Promise<Treatment> {
    const id = this.currentTreatmentId++;
    const newTreatment = { ...treatment, id };
    this.treatments.set(id, newTreatment);
    return newTreatment;
  }

  // Specialization operations
  async getAllSpecializations(): Promise<Specialization[]> {
    return Array.from(this.specializations.values())
      .sort((a, b) => a.order - b.order);
  }

  async getSpecializationBySlug(slug: string): Promise<Specialization | undefined> {
    return Array.from(this.specializations.values()).find(
      (specialization) => specialization.slug === slug,
    );
  }

  async createSpecialization(specialization: InsertSpecialization): Promise<Specialization> {
    const id = this.currentSpecializationId++;
    const newSpecialization = { ...specialization, id };
    this.specializations.set(id, newSpecialization);
    return newSpecialization;
  }

  // Blog Post operations
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug,
    );
  }

  async createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const newPost = { ...blogPost, id };
    this.blogPosts.set(id, newPost);
    return newPost;
  }

  // Appointment operations
  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const newAppointment = { 
      ...appointment, 
      id, 
      status: "pending", 
      createdAt: new Date() 
    };
    this.appointments.set(id, newAppointment);
    return newAppointment;
  }

  async getAllAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  // Contact Message operations
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const newMessage = { ...message, id, createdAt: new Date() };
    this.contactMessages.set(id, newMessage);
    return newMessage;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  // Seed initial data
  private seedData() {
    // Seed Team Members
    const teamMembers: InsertTeamMember[] = [
      {
        name: "Dr. Sarah Johnson",
        title: "Prosthodontist, Founder",
        bio: "Dr. Johnson has over 20 years of experience in prosthodontics and is passionate about restoring smiles and patient confidence.",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
        order: 1
      },
      {
        name: "Dr. Michael Chen",
        title: "Orthodontist",
        bio: "Specializing in orthodontics for all ages, Dr. Chen is known for creating beautiful, aligned smiles with the latest techniques.",
        imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
        order: 2
      },
      {
        name: "Dr. Maria Rodriguez",
        title: "Pediatric Dentist",
        bio: "Dr. Rodriguez specializes in children's dentistry, creating positive dental experiences for our youngest patients.",
        imageUrl: "https://images.unsplash.com/photo-1607990283143-2c5e98371f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
        order: 3
      }
    ];
    
    teamMembers.forEach(member => this.createTeamMember(member));

    // Seed Treatment Categories
    const categories: InsertTreatmentCategory[] = [
      {
        name: "Preventive Care",
        slug: "preventive",
        description: "Regular care to maintain oral health and prevent issues",
        order: 1
      },
      {
        name: "Restorative",
        slug: "restorative",
        description: "Procedures to restore damaged or missing teeth",
        order: 2
      },
      {
        name: "Cosmetic",
        slug: "cosmetic",
        description: "Treatments to enhance the appearance of your smile",
        order: 3
      },
      {
        name: "Orthodontic",
        slug: "orthodontic",
        description: "Services to align teeth and correct bite issues",
        order: 4
      },
      {
        name: "Oral Surgery",
        slug: "surgical",
        description: "Surgical procedures for complex dental issues",
        order: 5
      }
    ];
    
    const categoryMap = new Map<string, number>();
    
    categories.forEach(async (category) => {
      const newCategory = await this.createTreatmentCategory(category);
      categoryMap.set(category.slug, newCategory.id);
    });

    // Seed Treatments
    setTimeout(() => {
      const treatments: InsertTreatment[] = [
        // Preventive treatments
        {
          name: "Dental Cleanings",
          slug: "dental-cleanings",
          description: "Regular professional cleanings remove plaque and tartar buildup, preventing decay and gum disease.",
          categoryId: categoryMap.get("preventive")!,
          icon: "fa-solid fa-tooth",
          order: 1
        },
        {
          name: "Fluoride Treatments",
          slug: "fluoride-treatments",
          description: "Professional fluoride treatments strengthen enamel and help prevent tooth decay for both children and adults.",
          categoryId: categoryMap.get("preventive")!,
          icon: "fa-solid fa-shield-virus",
          order: 2
        },
        {
          name: "Dental Sealants",
          slug: "dental-sealants",
          description: "Protective coatings applied to molars to prevent decay in the deep grooves and pits of the teeth.",
          categoryId: categoryMap.get("preventive")!,
          icon: "fa-solid fa-fill-drip",
          order: 3
        },
        {
          name: "Oral Cancer Screenings",
          slug: "oral-cancer-screenings",
          description: "Regular screenings to detect early signs of oral cancer, when treatment is most effective.",
          categoryId: categoryMap.get("preventive")!,
          icon: "fa-solid fa-search",
          order: 4
        },
        {
          name: "Dental Exams",
          slug: "dental-exams",
          description: "Comprehensive examinations to evaluate your oral health and detect issues before they become serious.",
          categoryId: categoryMap.get("preventive")!,
          icon: "fa-solid fa-microscope",
          order: 5
        },
        {
          name: "X-rays",
          slug: "x-rays",
          description: "Digital radiographs that help us see beyond what's visible during a regular exam, with minimal radiation.",
          categoryId: categoryMap.get("preventive")!,
          icon: "fa-solid fa-x-ray",
          order: 6
        },
        
        // Restorative treatments
        {
          name: "Fillings",
          slug: "fillings",
          description: "Tooth-colored materials to repair cavities and restore the function and appearance of damaged teeth.",
          categoryId: categoryMap.get("restorative")!,
          icon: "fa-solid fa-square",
          order: 1
        },
        {
          name: "Crowns",
          slug: "crowns",
          description: "Custom-made caps that cover damaged teeth to restore strength, size, shape, and appearance.",
          categoryId: categoryMap.get("restorative")!,
          icon: "fa-solid fa-crown",
          order: 2
        },
        {
          name: "Bridges",
          slug: "bridges",
          description: "Fixed prosthetics that replace one or more missing teeth by anchoring to adjacent natural teeth.",
          categoryId: categoryMap.get("restorative")!,
          icon: "fa-solid fa-grip-lines",
          order: 3
        },
        {
          name: "Dental Implants",
          slug: "dental-implants",
          description: "Permanent replacements for missing teeth that look, feel, and function like natural teeth.",
          categoryId: categoryMap.get("restorative")!,
          icon: "fa-solid fa-tooth",
          order: 4
        },
        
        // Cosmetic treatments
        {
          name: "Teeth Whitening",
          slug: "teeth-whitening",
          description: "Professional whitening to remove stains and discoloration for a brighter, more confident smile.",
          categoryId: categoryMap.get("cosmetic")!,
          icon: "fa-solid fa-sparkles",
          order: 1
        },
        {
          name: "Veneers",
          slug: "veneers",
          description: "Thin porcelain shells custom-made to cover the front of teeth, improving their appearance dramatically.",
          categoryId: categoryMap.get("cosmetic")!,
          icon: "fa-solid fa-mask",
          order: 2
        },
        {
          name: "Bonding",
          slug: "bonding",
          description: "Application of tooth-colored resin to repair chips, cracks, or gaps for a more uniform smile.",
          categoryId: categoryMap.get("cosmetic")!,
          icon: "fa-solid fa-droplet",
          order: 3
        },
        
        // Orthodontic treatments
        {
          name: "Braces",
          slug: "braces",
          description: "Traditional or clear brackets and wires to gradually align teeth and correct bite issues.",
          categoryId: categoryMap.get("orthodontic")!,
          icon: "fa-solid fa-brackets-curly",
          order: 1
        },
        {
          name: "Clear Aligners",
          slug: "clear-aligners",
          description: "Custom-made, removable clear trays that gradually straighten teeth with discretion and convenience.",
          categoryId: categoryMap.get("orthodontic")!,
          icon: "fa-solid fa-teeth",
          order: 2
        },
        
        // Surgical treatments
        {
          name: "Tooth Extractions",
          slug: "tooth-extractions",
          description: "Removal of damaged or problematic teeth that cannot be saved with other treatments.",
          categoryId: categoryMap.get("surgical")!,
          icon: "fa-solid fa-tooth",
          order: 1
        },
        {
          name: "Wisdom Teeth Removal",
          slug: "wisdom-teeth-removal",
          description: "Extraction of third molars that are impacted, causing pain, or creating other dental issues.",
          categoryId: categoryMap.get("surgical")!,
          icon: "fa-solid fa-teeth-open",
          order: 2
        }
      ];
      
      treatments.forEach(treatment => this.createTreatment(treatment));
    }, 100); // Small delay to ensure categories are created first

    // Seed Specializations
    const specializations: InsertSpecialization[] = [
      {
        name: "Prosthodontics",
        slug: "prosthodontics",
        shortDescription: "Specialized care for dental prostheses, including crowns, bridges, dentures, and implant restorations.",
        longDescription: "Our prosthodontics specialists focus on the restoration and replacement of teeth, helping patients regain both function and aesthetics. We provide comprehensive care for dental prostheses including crowns, bridges, complete and partial dentures, and implant-supported restorations. Using the latest materials and techniques, we create custom prosthetics that look natural and function effectively.",
        icon: "fa-solid fa-teeth-open",
        order: 1
      },
      {
        name: "Periodontics",
        slug: "periodontics",
        shortDescription: "Focused on preventing, diagnosing, and treating gum diseases and maintaining the health of supporting structures.",
        longDescription: "Our periodontics team specializes in the prevention, diagnosis, and treatment of gum disease, as well as the placement of dental implants. We offer comprehensive periodontal care including deep cleaning, gum surgery, and maintenance programs tailored to each patient's needs. Our goal is to help you maintain healthy gums and supportive structures for your teeth throughout your life.",
        icon: "fa-solid fa-tooth",
        order: 2
      },
      {
        name: "Orthodontics",
        slug: "orthodontics",
        shortDescription: "Correcting misaligned teeth and jaws using braces, clear aligners, and other orthodontic appliances.",
        longDescription: "Our orthodontics specialists focus on the diagnosis, prevention, and correction of misaligned teeth and jaws. We offer a variety of treatment options for patients of all ages, including traditional braces, clear braces, and clear aligners like Invisalign. Our team creates personalized treatment plans designed to give you a straight, healthy smile that functions properly and looks great.",
        icon: "fa-solid fa-teeth",
        order: 3
      },
      {
        name: "Endodontics",
        slug: "endodontics",
        shortDescription: "Specializing in root canal therapy and treatments involving the inner tissues of the teeth.",
        longDescription: "Our endodontics specialists focus on diagnosing tooth pain and performing procedures relating to the inside of the tooth, particularly root canal therapy. Using advanced technology and techniques, we make these procedures as comfortable and effective as possible. Our goal is to relieve your pain and save your natural teeth whenever possible.",
        icon: "fa-solid fa-toolbox",
        order: 4
      },
      {
        name: "Oral Surgery",
        slug: "oral-surgery",
        shortDescription: "Surgical procedures including extractions, implant placement, bone grafting, and corrective jaw surgery.",
        longDescription: "Our oral surgery team provides a wide range of surgical procedures to treat complex dental issues. Services include tooth extractions (including wisdom teeth), dental implant placement, bone grafting, biopsies, and corrective jaw surgery. We focus on patient comfort and use the latest surgical techniques to ensure optimal outcomes with minimal recovery time.",
        icon: "fa-solid fa-user-md",
        order: 5
      },
      {
        name: "Pediatric Dentistry",
        slug: "pediatric-dentistry",
        shortDescription: "Specialized dental care for children, focusing on preventive care and positive dental experiences.",
        longDescription: "Our pediatric dentistry specialists are dedicated to providing gentle, comprehensive dental care for children from infancy through adolescence. We create a fun, positive environment that helps children develop good dental habits and comfort with dental visits. Our services include preventive care, early orthodontic assessment, and treatment of dental issues specific to developing teeth and growing jaws.",
        icon: "fa-solid fa-baby",
        order: 6
      }
    ];
    
    specializations.forEach(specialization => this.createSpecialization(specialization));

    // Seed Blog Posts
    const blogPosts: InsertBlogPost[] = [
      {
        title: "The Importance of Daily Flossing: Beyond the Brush",
        slug: "importance-of-daily-flossing",
        excerpt: "Learn why flossing is a crucial part of your oral hygiene routine and how to do it properly for the best results.",
        content: `
          <h2>Why Flossing Matters</h2>
          <p>While brushing your teeth is essential, it only cleans about 60% of your tooth surfaces. Flossing reaches the spaces between teeth and below the gumline that your toothbrush can't access.</p>
          
          <p>Regular flossing helps prevent:</p>
          <ul>
            <li>Cavities between teeth</li>
            <li>Gum disease</li>
            <li>Bad breath</li>
            <li>Tartar buildup</li>
          </ul>
          
          <h2>Proper Flossing Technique</h2>
          <p>To get the most benefit from flossing, follow these steps:</p>
          <ol>
            <li>Use about 18 inches of floss, wrapping most around your middle fingers</li>
            <li>Hold 1-2 inches of floss tightly between thumbs and forefingers</li>
            <li>Use a gentle rubbing motion to guide the floss between teeth</li>
            <li>Curve the floss into a C-shape against one tooth and slide it gently into the space between the gum and tooth</li>
            <li>Rub the floss gently up and down against the side of the tooth</li>
            <li>Repeat for each tooth, using a clean section of floss each time</li>
          </ol>
          
          <h2>When to Floss</h2>
          <p>Ideally, you should floss at least once per day. Many dentists recommend flossing before bedtime to remove food particles and plaque that have accumulated throughout the day.</p>
          
          <h2>Types of Floss</h2>
          <p>There are several types of floss available:</p>
          <ul>
            <li><strong>Waxed floss:</strong> Slides more easily between tight teeth</li>
            <li><strong>Unwaxed floss:</strong> Thinner and fits into tight spaces, but may fray or break</li>
            <li><strong>Dental tape:</strong> Broader and flatter than standard floss, good for people with wider spaces between teeth</li>
            <li><strong>Floss picks:</strong> Pre-threaded floss holders that can be easier to manage</li>
            <li><strong>Water flossers:</strong> Use a stream of pulsating water to remove food particles and plaque</li>
          </ul>
          
          <p>If you're not sure which type is best for you, ask your dental hygienist at your next cleaning appointment.</p>
        `,
        imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        publishedAt: new Date("2023-05-15")
      },
      {
        title: "Foods and Drinks That Stain Your Teeth: What to Avoid",
        slug: "foods-and-drinks-that-stain-teeth",
        excerpt: "Discover which common foods and beverages are most likely to stain your teeth and how to minimize their impact.",
        content: `
          <h2>Common Staining Culprits</h2>
          <p>Many delicious foods and beverages can unfortunately lead to tooth staining over time. The main offenders include:</p>
          
          <h3>Beverages</h3>
          <ul>
            <li><strong>Coffee and Tea:</strong> Their dark color and acidity can cause yellowing</li>
            <li><strong>Red Wine:</strong> Contains chromogens and tannins that bind to teeth</li>
            <li><strong>Cola and Dark Sodas:</strong> Contain acid, sugar, and dark colorants</li>
            <li><strong>Sports Drinks:</strong> Often contain acid and artificial colors</li>
          </ul>
          
          <h3>Foods</h3>
          <ul>
            <li><strong>Berries:</strong> Blueberries, blackberries, and pomegranates have intense color pigments</li>
            <li><strong>Tomato Sauce:</strong> Acidic and brightly colored</li>
            <li><strong>Soy Sauce:</strong> Dark color can lead to staining</li>
            <li><strong>Balsamic Vinegar:</strong> Dark color and stickiness allow it to adhere to teeth</li>
            <li><strong>Curry:</strong> Contains yellow-staining compounds</li>
          </ul>
          
          <h2>Minimizing Stains</h2>
          <p>You don't need to completely eliminate these foods from your diet. Instead, try these strategies:</p>
          
          <ul>
            <li>Use a straw when drinking staining beverages to bypass your front teeth</li>
            <li>Rinse your mouth with water after consuming staining foods or drinks</li>
            <li>Brush your teeth about 30 minutes after eating (waiting helps protect enamel)</li>
            <li>Include "detergent" foods in your meals (apples, celery, carrots, cauliflower)</li>
            <li>Maintain regular dental cleanings to remove surface stains</li>
          </ul>
          
          <h2>Professional Whitening Options</h2>
          <p>If you already have staining, professional whitening treatments can help restore your smile's brightness. At Smiles Dental Clinic, we offer both in-office whitening procedures and take-home kits that are safe and effective.</p>
          
          <p>Schedule a consultation to discuss which option might be best for your specific needs and goals.</p>
        `,
        imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        publishedAt: new Date("2023-04-28")
      },
      {
        title: "Preparing Your Child for Their First Dental Visit",
        slug: "preparing-child-for-first-dental-visit",
        excerpt: "Tips for parents on how to make your child's first dental appointment a positive and stress-free experience.",
        content: `
          <h2>When Should the First Visit Happen?</h2>
          <p>The American Academy of Pediatric Dentistry recommends scheduling your child's first dental visit by their first birthday or within six months after their first tooth appears.</p>
          
          <p>These early visits help establish a "dental home" and allow us to monitor development, provide preventive care, and catch any issues early.</p>
          
          <h2>Before the Appointment</h2>
          <p>Preparation can make a big difference in how your child experiences their first dental visit:</p>
          
          <ul>
            <li><strong>Talk positively:</strong> Describe the visit in simple, positive terms without using scary words</li>
            <li><strong>Read children's books:</strong> Find picture books about dental visits (we can recommend some titles)</li>
            <li><strong>Play pretend:</strong> Role-play a dental visit at home, taking turns being the dentist and patient</li>
            <li><strong>Schedule strategically:</strong> Book an appointment when your child is usually well-rested and cooperative</li>
            <li><strong>Complete paperwork ahead:</strong> Fill out forms before your visit if possible</li>
          </ul>
          
          <h2>During the Visit</h2>
          <p>Here's what to expect during your child's first appointment:</p>
          
          <ul>
            <li>A gentle examination of your child's teeth, jaws, bite, gums, and oral tissues</li>
            <li>A gentle cleaning if needed</li>
            <li>Fluoride application if appropriate</li>
            <li>Discussion about oral hygiene for children</li>
            <li>Answers to any questions you may have</li>
          </ul>
          
          <p>At Smiles Dental Clinic, Dr. Rodriguez specializes in making dental visits fun and comfortable for our youngest patients. Our office is designed with children in mind, with colorful decorations, child-sized furniture, and special prizes for brave patients.</p>
          
          <h2>After the Visit</h2>
          <p>Reinforce the positive experience:</p>
          
          <ul>
            <li>Praise your child for their good behavior</li>
            <li>Emphasize the positive aspects of the visit</li>
            <li>Continue talking about dental health at home</li>
            <li>Maintain the dental hygiene routine recommended by the dentist</li>
          </ul>
          
          <p>With the right preparation and a dental team experienced in pediatric care, your child's first dental visit can be the beginning of a lifetime of positive dental experiences.</p>
        `,
        imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        publishedAt: new Date("2023-04-10")
      }
    ];
    
    blogPosts.forEach(post => this.createBlogPost(post));
  }
}

export const storage = new MemStorage();
