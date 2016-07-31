import {User} from './user.model';

export const userId = 'slaparra';
export const imageUrl = 'https://avatars3.githubusercontent.com/u/6984985?v=3&s=460';

describe('User model test', () => {

    let user: User;

    beforeEach(() => {
        user = new User(userId, imageUrl);
    });

    it('has id', () => {
        expect(user.getId()).toEqual(userId);
    });

    it('has image url', () => {
        expect(user.getImageUrl()).toEqual(imageUrl);
    });

    it('commits are empty', () => {
        expect(user.getCommits().length).toEqual(0);
    });

    it('user updated flag is false', () => {
        expect(user.isUserUpdated()).toEqual(false);
    });
});
