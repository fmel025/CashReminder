import { sqliteTable } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

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
});

export const reminders = sqliteTable("reminders", {
  id: t.integer("id").primaryKey({ autoIncrement: true }),
})