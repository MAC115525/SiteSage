import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema, insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Team Members
  app.get("/api/team-members", async (req, res) => {
    try {
      const teamMembers = await storage.getAllTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve team members" });
    }
  });

  app.get("/api/team-members/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid team member ID" });
      }

      const teamMember = await storage.getTeamMemberById(id);
      if (!teamMember) {
        return res.status(404).json({ message: "Team member not found" });
      }

      res.json(teamMember);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve team member" });
    }
  });

  // Treatment Categories
  app.get("/api/treatment-categories", async (req, res) => {
    try {
      const categories = await storage.getAllTreatmentCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve treatment categories" });
    }
  });

  app.get("/api/treatment-categories/:slug", async (req, res) => {
    try {
      const category = await storage.getTreatmentCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ message: "Treatment category not found" });
      }

      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve treatment category" });
    }
  });

  // Treatments
  app.get("/api/treatments", async (req, res) => {
    try {
      const treatments = await storage.getAllTreatments();
      res.json(treatments);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve treatments" });
    }
  });

  app.get("/api/treatments/category/:categoryId", async (req, res) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      if (isNaN(categoryId)) {
        return res.status(400).json({ message: "Invalid category ID" });
      }

      const treatments = await storage.getTreatmentsByCategory(categoryId);
      res.json(treatments);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve treatments by category" });
    }
  });

  app.get("/api/treatments/:slug", async (req, res) => {
    try {
      const treatment = await storage.getTreatmentBySlug(req.params.slug);
      if (!treatment) {
        return res.status(404).json({ message: "Treatment not found" });
      }

      res.json(treatment);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve treatment" });
    }
  });

  // Specializations
  app.get("/api/specializations", async (req, res) => {
    try {
      const specializations = await storage.getAllSpecializations();
      res.json(specializations);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve specializations" });
    }
  });

  app.get("/api/specializations/:slug", async (req, res) => {
    try {
      const specialization = await storage.getSpecializationBySlug(req.params.slug);
      if (!specialization) {
        return res.status(404).json({ message: "Specialization not found" });
      }

      res.json(specialization);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve specialization" });
    }
  });

  // Blog Posts
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const blogPosts = await storage.getAllBlogPosts();
      res.json(blogPosts);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve blog posts" });
    }
  });

  app.get("/api/blog-posts/:slug", async (req, res) => {
    try {
      const blogPost = await storage.getBlogPostBySlug(req.params.slug);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }

      res.json(blogPost);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve blog post" });
    }
  });

  // Appointments
  app.post("/api/appointments", async (req, res) => {
    try {
      const appointmentData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(appointmentData);
      res.status(201).json(appointment);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid appointment data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to create appointment" });
    }
  });

  // Contact Messages
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid contact message data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to send contact message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
