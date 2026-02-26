const { getSupabaseClient } = require('./supabaseClient');

const addUser = async ({ id, name, room }) => {
  const supabase = getSupabaseClient();
  
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if(!name || !room) return { error: 'Username and room are required.' };

  try {
    const { data: existingUsers, error: checkError } = await supabase
      .from('users')
      .select('id')
      .eq('room', room)
      .eq('name', name)
      .limit(1);

    if (checkError) return { error: 'Database query failed.' };
    if (existingUsers && existingUsers.length > 0) {
      return { error: 'Username is taken.' };
    }

    const { data: insertedUser, error: insertError } = await supabase
      .from('users')
      .insert([{ id, name, room }])
      .select();

    if (insertError) return { error: 'Failed to add user.' };

    return { user: insertedUser[0] };
  } catch (err) {
    return { error: 'Database error.' };
  }
}

const removeUser = async (id) => {
  const supabase = getSupabaseClient();

  try {
    const { data, error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
      .select();

    if (error) return null;
    return data && data.length > 0 ? data[0] : null;
  } catch (err) {
    return null;
  }
}

const getUser = async (id) => {
  const supabase = getSupabaseClient();

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .limit(1);

    if (error) return null;
    return data && data.length > 0 ? data[0] : null;
  } catch (err) {
    return null;
  }
}

const getUsersInRoom = async (room) => {
  const supabase = getSupabaseClient();
  room = room.trim().toLowerCase();

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('room', room);

    if (error) return [];
    return data || [];
  } catch (err) {
    return [];
  }
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };