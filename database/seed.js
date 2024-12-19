/* eslint-env node */
import { fakerEN_US as faker } from '@faker-js/faker';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_PUBLIC_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)
const projects = [];
const seedProjects = async (number) => {
  for (let i = 0; i < number; i++) {
    const name = faker.lorem.words(3);
    projects.push({
      name,
      slug: name.toLowerCase().replace(/\s/g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    });
  }
  await supabase.from('projects').insert(projects);
}

await seedProjects(10);
