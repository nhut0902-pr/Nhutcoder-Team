from playwright.sync_api import sync_playwright
import os

def run_verification(page):
    # Test Admin Login with ENV vars
    page.goto("http://localhost:3000/admin")
    page.wait_for_selector("h1:has-text('Admin Portal')")

    # Fill in credentials from env-like context (simulating the user)
    page.fill('input[placeholder="Username"]', "nhutcoder")
    page.fill('input[placeholder="••••••••"]', "090211")
    page.click('button:has-text("Sign In")')

    # Wait for dashboard
    page.wait_for_selector("h1:has-text('Admin Panel')")
    print("Admin login successful with credentials.")
    page.screenshot(path="/home/jules/verification/screenshots/admin_dashboard_verified.png")

    # Test Feedback Submission
    page.goto("http://localhost:3000/feedback")
    page.fill('input[placeholder="John Doe"]', "Test User")
    page.fill('input[placeholder="john@example.com"]', "test@example.com")
    page.fill('textarea[placeholder="Tell us what you think..."]', "This is a test message from Playwright.")
    page.click('button:has-text("Send Feedback")')

    # Check for success message
    page.wait_for_selector("text=Thank You!")
    print("Feedback submission successful.")
    page.screenshot(path="/home/jules/verification/screenshots/feedback_success_verified.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_verification(page)
        finally:
            context.close()
            browser.close()
