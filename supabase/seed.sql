insert into public.healthcheck (id)
values (1)
on conflict (id) do nothing;

insert into public.messages (room, "user", text)
select 'lobby', 'system', 'welcome to lobby'
where not exists (
  select 1 from public.messages where room = 'lobby'
);
