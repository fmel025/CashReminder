import { sqliteTable } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

export const categories = sqliteTable("categories", {
  id: t.integer("id").primaryKey({ autoIncrement: true }),
  name: t.text("name").notNull().unique(),
  icon: t.text("icon"), // Optional, could be an emoji (?)
});

export const payments = sqliteTable("payments", {
  id: t.integer("id").primaryKey({ autoIncrement: true }),
  title: t.text("title").notNull(),
  isRecurring: t
    .integer("is_subscription", { mode: "boolean" })
    .notNull()
    .default(true),
  isPaid: t.integer("is_paid").notNull().default(0),
  amount: t.real("amount").notNull(),
  dueDate: t.integer("due_date", { mode: "timestamp" }),
  categoryId: t
    .integer("category_id")
    .references(() => categories.id)
    .notNull(),
});

export const reminders = sqliteTable("reminders", {
  id: t.integer("id").primaryKey({ autoIncrement: true }),
  paymentId: t
    .integer("payment_id")
    .references(() => payments.id)
    .notNull(),
  reminderDate: t.integer("reminder_date", { mode: "timestamp" }).notNull(),
  isSent: t.integer("is_sent", { mode: "boolean" }).notNull().default(false),
});
