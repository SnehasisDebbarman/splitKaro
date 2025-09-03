export interface Member {
  id: string;
  name: string;
}

export interface Expense {
  id: string;
  groupId: string;
  description: string;
  amountCents: number;
  paidByMemberId: string;
  createdAt: string;
}

export interface Group {
  id: string;
  name: string;
  memberIds: string[];
  expenseIds: string[];
}

export interface GroupSummary {
  id: string;
  name: string;
  numMembers: number;
  numExpenses: number;
}

