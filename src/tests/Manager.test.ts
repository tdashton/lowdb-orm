import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import { Manager } from '../Manager.js';
import { DatabaseAdapter } from '../DatabaseAdapter.js';
import { AssertionError } from 'node:assert';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface Entity {
	id: number;
	field2: boolean;
	field3: string;
};

interface EntityDbFormat {
	entities: Entity[];
};

export function testFindById(): void {
	const instance = new DatabaseAdapter<EntityDbFormat, Entity>(join(__dirname, '../../src/tests/entity.json'));
	const manager = new Manager<EntityDbFormat, Entity>(instance);
	const entity = manager.findById(1);

	assert(entity !== undefined);

	entity.then((entity) => {
		assert(entity.id === 1);
		assert(entity.field2 === true);
		assert(entity.field3 === "value1-3");
	});
}
