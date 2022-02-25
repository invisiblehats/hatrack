import React from 'react';

export default {
  title: 'Utilties/Spacing/Examples',
  docs: false
};

const sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const MarginStart = () => (
  <div>
    {sizes.map(size => (
      <div key={size}>
        <h2 className="h5">.ms-{size}</h2>
        <button className="btn btn-primary">Confirm</button>
        <button className={`btn btn-secondary ms-${size}`}>Cancel</button>
        <hr />
      </div>
    ))}
  </div>
)

MarginStart.storyName = "Margin/Start (left)"

export const MarginEnd = () => (
  <div>
    {sizes.map(size => (
      <div key={size}>
        <h2 className="h5">.me-{size}</h2>
        <button className={`btn btn-primary me-${size}`}>Confirm</button>
        <button className="btn btn-secondary">Cancel</button>

        <hr />
      </div>
    ))}
  </div>
)
MarginEnd.storyName = "Margin/End (right)"

export const MarginTop = () => (
  <div>
    {sizes.map(size => (
      <div key={size}>
        <h2 className="h5">.mt-{size}</h2>
        <button className={`btn btn-primary mt-${size}`}>Confirm</button>
        <button className="btn btn-secondary">Cancel</button>

        <hr />
      </div>
    ))}
  </div>
)

MarginTop.storyName = "Margin/Top"

export const MarginBottom = () => (
  <div>
    {sizes.map(size => (
      <div key={size}>
        <h2 className="h5">.mb-{size}</h2>
        <button className={`btn btn-primary mb-${size}`}>Confirm</button>
        <button className="btn btn-secondary">Cancel</button>

        <hr />
      </div>
    ))}
  </div>
)

MarginBottom.storyName = "Margin/Bottom"
