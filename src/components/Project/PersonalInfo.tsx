import Icon from '../icons/Icon';
import type { PersonalLink } from '../../models/Project';

interface Props {
  links?: Partial<PersonalLink>;
}

const PersonalInfo = ({ links }: Props) => {
  return links ? (
    <div className="flex flex-wrap gap-3 my-4">
      {links.github && (
        <a href={links.github.url} rel="noopener noreferrer" target="_blank">
          <Icon type="github" />
        </a>
      )}
      {links.website && (
        <a href={links.website.url} rel="noopener noreferrer" target="_blank">
          <Icon type="website" />
        </a>
      )}
      {links.portfolio && (
        <a href={links.portfolio.url} rel="noopener noreferrer" target="_blank">
          <Icon type="portfolio" />
        </a>
      )}
    </div>
  ) : null;
};

export default PersonalInfo;