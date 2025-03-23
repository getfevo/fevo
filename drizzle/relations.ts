import { relations } from "drizzle-orm/relations";
import { user, invitation, organization, member, session, account, project, featureRequest } from "./schema";

export const invitationRelations = relations(invitation, ({one}) => ({
	user: one(user, {
		fields: [invitation.inviterId],
		references: [user.id]
	}),
	organization: one(organization, {
		fields: [invitation.organizationId],
		references: [organization.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	invitations: many(invitation),
	members: many(member),
	sessions: many(session),
	accounts: many(account),
	projects: many(project),
	featureRequests: many(featureRequest),
}));

export const organizationRelations = relations(organization, ({many}) => ({
	invitations: many(invitation),
	members: many(member),
	featureRequests: many(featureRequest),
}));

export const memberRelations = relations(member, ({one}) => ({
	organization: one(organization, {
		fields: [member.organizationId],
		references: [organization.id]
	}),
	user: one(user, {
		fields: [member.userId],
		references: [user.id]
	}),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));

export const projectRelations = relations(project, ({one}) => ({
	user: one(user, {
		fields: [project.userId],
		references: [user.id]
	}),
}));

export const featureRequestRelations = relations(featureRequest, ({one}) => ({
	user: one(user, {
		fields: [featureRequest.createdBy],
		references: [user.id]
	}),
	organization: one(organization, {
		fields: [featureRequest.organizationSlug],
		references: [organization.slug]
	}),
}));