ALTER TABLE "waitlist" RENAME TO "early_access";--> statement-breakpoint
ALTER TABLE "early_access" DROP CONSTRAINT "waitlist_email_unique";--> statement-breakpoint
ALTER TABLE "early_access" ADD CONSTRAINT "early_access_email_unique" UNIQUE("email");