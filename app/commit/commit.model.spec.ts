import {Commit} from './commit.model';
import {Repository} from '../repository/repository.model';

export const authorName: string = 'authorName';
export const commitId: string  = 'commithash';
export const message: string  = 'This is a fake commit message';

describe('Commit model test', () => {

    let commit:Commit;
    let fakeRepository: Repository = new Repository('aRepositoryId', 'aRepositoryName');
    let aDate: Date = new Date();

    beforeEach(() => {
        commit = new Commit(commitId, message, aDate, fakeRepository, authorName);
    });

    it('has sha (commit id)', () => {
        expect(commit.getSha()).toEqual(commitId);
    });

    it('has a repository', () => {
        expect(commit.getRepository()).toEqual(fakeRepository);
    });

});
