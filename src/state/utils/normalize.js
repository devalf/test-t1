import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const mySchema = { users: [user] };

export const normalizeData = (usersData) => normalize(usersData, mySchema);
