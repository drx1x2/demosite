addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CloudSync Pro - Concept Demo</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 2rem; }
        .header { text-align: center; margin-bottom: 3rem; }
        .logo { font-size: 2.5rem; font-weight: 700; color: #2563eb; margin-bottom: 0.5rem; }
        .tagline { font-size: 1.2rem; color: #6b7280; }
        .warning { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 1rem; margin: 2rem 0; }
        .warning h3 { color: #92400e; margin-bottom: 0.5rem; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0; }
        .feature { background: #f8fafc; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2563eb; }
        .feature h3 { color: #1e40af; margin-bottom: 0.5rem; }
        .cta { text-align: center; margin: 3rem 0; }
        .btn { background: #2563eb; color: white; padding: 0.75rem 2rem; border: none; border-radius: 6px; font-size: 1rem; cursor: pointer; }
        .btn:disabled { background: #9ca3af; cursor: not-allowed; }
        .footer { text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">CloudSync Pro</div>
            <div class="tagline">Next-Generation Cloud Integration Platform</div>
        </header>

        <div class="warning">
            <h3>⚠️ Concept Demo - Early Testing Phase</h3>
            <p>This is a demonstration of a concept application currently in early development and testing. This demo does not guarantee access to any actual service or product. No official partnerships or funding have been secured at this time.</p>
        </div>

        <div class="features">
            <div class="feature">
                <h3>🚀 Edge Computing</h3>
                <p>Lightning-fast processing at the edge with global distribution capabilities.</p>
            </div>
            <div class="feature">
                <h3>🔒 Secure APIs</h3>
                <p>Enterprise-grade security with built-in authentication and encryption.</p>
            </div>
            <div class="feature">
                <h3>📊 Real-time Analytics</h3>
                <p>Comprehensive monitoring and analytics dashboard for performance insights.</p>
            </div>
        </div>

        <div class="cta">
            <button class="btn" disabled>Request Early Access (Coming Soon)</button>
            <p style="margin-top: 1rem; color: #6b7280;">Sign-ups will be available when the concept moves to beta testing.</p>
        </div>

        <footer class="footer">
            <p>CloudSync Pro Concept Demo | Built with Cloudflare Workers</p>
            <p>This is a fictional demonstration project for testing purposes only.</p>
        </footer>
    </div>
</body>
</html>`

  return new Response(html, {
    headers: { 'content-type': 'text/html;charset=UTF-8' }
  })
}