import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, recruiterName, company, role } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_RTR_WEBHOOK_URL || "https://n8n.rifaterdemsahin.com/webhook/rtr-notification";
    const n8nApiKey = process.env.N8N_API_KEY || "";

    const payload = {
      email,
      recruiterName: recruiterName || "Recruiter",
      company: company || "",
      role: role || "",
      candidateName: "Rifat Erdem Sahin",
      candidateEmail: "contact@rifaterdemsahin.com",
      candidatePhone: "+44 7848 024173",
      candidateLinkedIn: "https://linkedin.com/in/rifaterdemsahin",
      timestamp: new Date().toISOString(),
    };

    let n8nOk = false;
    let n8nError = "";

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(n8nApiKey ? { "X-N8N-API-KEY": n8nApiKey } : {}),
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        n8nOk = true;
      } else {
        n8nError = `n8n responded with ${res.status}`;
      }
    } catch (err: any) {
      n8nError = err.message || "n8n unreachable";
    }

    // Build the RTR confirmation message
    const confirmation = {
      success: true,
      message: `Rifat Erdem Sahin is happy to be represented by ${recruiterName || "you"}${company ? ` from ${company}` : ""}.${role ? ` For the ${role} role.` : ""}`,
      n8nNotified: n8nOk,
      n8nError: n8nError || undefined,
      instructions: [
        "Rifat is a British citizen based in London, UK.",
        "Active security clearances: UK SC (until 2028) and NATO (until 2029).",
        "Please share the role JD and rate/salary expectations.",
        "CV and supporting documents are available at https://rifaterdemsahin.com",
        "Direct contact: contact@rifaterdemsahin.com / +44 7848 024173",
      ],
    };

    return NextResponse.json(confirmation, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
