import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import { DatabaseAdapter } from '../DatabaseAdapter.js'

const __dirname = dirname(fileURLToPath(import.meta.url));


interface Entity {
	field1: number;
	field2: boolean;
	field3: string;
};

interface EntityDbFormat {
	entities: Entity[];
};

export function testInstantiate(): void {
	const instance = new DatabaseAdapter<EntityDbFormat, Entity>(join(__dirname, '../../src/tests/entity.json'));
	assert(instance !== undefined);
	const entities = instance.getEntities();
	entities.then((entities) => {
		assert(entities.length != 0);
	})
}

export function testNotEmpty(): void {
	const instance = new DatabaseAdapter<EntityDbFormat, Entity>(join(__dirname, '../../src/tests/entity.json'));
	const entities = instance.getEntities();
	entities.then((entities) => {
		assert(entities.length != 0);
	})
}

export function testFindById(): void {
	const instance = new DatabaseAdapter<EntityDbFormat, Entity>(join(__dirname, '../../src/tests/entity.json'));
	const entities = instance.getEntities();
	entities.then((entities) => {
		assert(entities.length != 0);
	})
}
