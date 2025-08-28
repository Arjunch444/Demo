// routes.js
const express = require("express");
const router = express.Router();

// Webhook endpoint for Checkmarx One
router.post("/checkmarx-webhook", (req, res) => {
  const scanData = req.body;

  console.log("📩 Received Checkmarx webhook payload:");
  console.log(JSON.stringify(scanData, null, 2));

  // Example: Extract scan status & project info
  if (scanData.scanId) {
    console.log(`Scan ID: ${scanData.scanId}`);
  }
  if (scanData.status) {
    console.log(`Status: ${scanData.status}`);
  }
  if (scanData.projectName) {
    console.log(`Project: ${scanData.projectName}`);
  }

  // Respond back to Checkmarx
  res.status(200).send("Webhook received successfully ✅");
});

module.exports = router;
