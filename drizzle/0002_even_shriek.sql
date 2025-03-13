ALTER TABLE "early_access" RENAME TO "waitlist";--> statement-breakpoint
ALTER TABLE "waitlist" DROP CONSTRAINT "early_access_email_unique";--> statement-breakpoint
ALTER TABLE "waitlist" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_email_unique" UNIQUE("email");