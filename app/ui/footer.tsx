import Link from 'next/link';
import { Icons } from './Icons';
import InnerWrapper from './components/innerWrapper';

const socialLinks = [
  {
    name: 'Twitter',
    href: '/',
    icon: Icons.twitter,
  },
  {
    name: 'YouTube',
    href: '/',
    icon: Icons.youTube,
  },
  {
    name: 'Instagram',
    href: '/',
    icon: Icons.instagram,
  },
  {
    name: 'Facebook',
    href: '/',
    icon: Icons.facebook,
  },
];
const menuLinks = [
  {
    name: 'Help',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/',
  },
  {
    name: 'Terms of Service',
    href: '/',
  },
  {
    name: 'Privacy Policy',
    href: '/',
  },
];
const secondMenuLinks = [
  {
    name: 'Features',
    href: '/',
  },
  {
    name: 'Pricing',
    href: '/',
  },
  {
    name: 'Discover',
    href: '/',
  },
  {
    name: 'Jobs',
    href: '/',
  },
];

const Footer = () => {
  return (
    <div className="bg-black">
      <InnerWrapper>
        <div className="flex min-h-[39rem]  justify-between  pb-20 pt-32">
          <div className="self-center">
            <p className="mb-6 text-4xl font-bold text-white">
              Subscribe for our timeletter.
            </p>

            <div className="mb-24 flex gap-16">
              <input placeholder="Your email address" />
              <button
                type="button"
                className="flex items-center justify-center bg-pink-500 px-5 text-white"
              >
                <Icons.arrow />
              </button>
            </div>
            <p className="text-2xl font-medium text-white">
              {' '}
              Ⓒ Organice01, Inc.
            </p>
          </div>

          <div className="flex  flex-col justify-between ">
            <div className="flex gap-6">
              <div className="flex flex-col">
                {menuLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <p className="text-2xl font-medium text-white">
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col">
                {secondMenuLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <p className="text-2xl font-medium text-white">
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              {socialLinks.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link key={link.name} href={link.href}>
                    <LinkIcon className="w-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </InnerWrapper>
    </div>
  );
};

export default Footer;
