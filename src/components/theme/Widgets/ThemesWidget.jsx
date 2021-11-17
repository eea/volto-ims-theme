import React from 'react';
import cx from 'classnames';

export const ThemesWidget = ({ value, children, className }) => {
  return value ? (
    <span className={cx(className, 'token', 'widget')}>
      {value.map((tag) => (
        <a
          className="ui label"
          href={`https://www.eea.europa.eu/themes/${tag.token}`}
          key={tag.token}
        >
          {children ? children(tag.title) : tag.title}
        </a>
      ))}
    </span>
  ) : (
    ''
  );
};
