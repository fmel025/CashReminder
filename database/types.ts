import * as Schema from "./schema";

export type Category = typeof Schema.categories.$inferSelect;
export type Payment = typeof Schema.payments.$inferSelect;
export type Reminder = typeof Schema.reminders.$inferSelect;