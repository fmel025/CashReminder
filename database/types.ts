import * as Schema from "./schema";

export type Category = typeof Schema.categories.$inferSelect;
export type Payment = typeof Schema.payments.$inferInsert;
export type Reminder = typeof Schema.reminders.$inferInsert;