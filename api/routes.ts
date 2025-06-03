import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

import { Router } from 'express'
import path from 'path'
import express from 'express'

export const router = Router()

router.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Serve attached assets
router.use('/api/assets', express.static(path.join(process.cwd(), 'attached_assets')))

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}