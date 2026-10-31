import { mailtoUrl } from './form-submit';

describe('mailtoUrl', () => {
  it('URI-encodes subject and body', () => {
    const url = mailtoUrl('a@b.test', 'Enquiry from Ada & Co', 'Hi!\nCost: 100% — ok?\n\nReply to: ada@example.com');
    expect(url).toBe(
      'mailto:a@b.test?subject=Enquiry%20from%20Ada%20%26%20Co&body=Hi!%0ACost%3A%20100%25%20%E2%80%94%20ok%3F%0A%0AReply%20to%3A%20ada%40example.com',
    );
  });
});
