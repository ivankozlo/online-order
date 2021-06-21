import React, { useState, useRef } from 'react';
import { CURRENCY } from 'helpers/constants';
import { useOnClickOutside } from 'helpers/useOnClickOutside';
import Button from 'components/button';
import Counter from 'components/counter';
import { useSpring, animated } from 'react-spring';
import {
  ItemCardBase,
  ItemCardBaseContent,
  ItemCardImage,
  ItemCardContent,
  ItemCardPrice,
  ItemCardName,
  ItemCardInformation,
  ItemCardType,
  ItemCardRoundedDot,
  ItemCardQuantity,
  ItemCardDetailsAnimatedWrapper,
  ItemCardDetailsInformation,
  ItemCardDetailsHalfColumn,
  ItemCardDetailsFullColumn,
  ItemCardDetailsTitle,
  ItemCardDetailsInfo,
  ItemCardCounterWrapper,
} from 'components/utils/theme';
import { useMeasure } from 'helpers/use-measure';
import { useCart } from 'contexts/cart/cart.provider';

interface ItemCardProps {
  item: any;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { addItem, getItem, removeItem } = useCart();
  const [isOpen, setOpen] = useState(false);
  const elRef = useRef();
  useOnClickOutside(elRef, () => setOpen(false));
  const [{ ref }, { height: viewHeight }] = useMeasure();
  const { opacity, height, transform } = useSpring<any>({
    from: {
      height: 0,
      opacity: 0,
      transform: 'translate3d(0,-50px,0)',
    },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(0,${isOpen ? 0 : -50}px,0)`,
    },
  });
  const icon = `plus-icon ${isOpen ? 'showed' : ''}`.trim();
  const baseClass = `${ItemCardBase} ${isOpen ? 'details-showed' : ''}`.trim();
  const contentClass = `${ItemCardBaseContent} ${
    isOpen ? 'rounded-b-none shadow-product-item' : ''
  }`.trim();

  const count = getItem(item.id)?.quantity;
  return (
    <div ref={elRef} className={baseClass}>
      <div className={contentClass} onClick={() => setOpen((prev) => !prev)}>
        <div className={icon} />
        <div className={ItemCardImage}>
          <img
            className="object-cover"
            src={'/items/' + item.image}
            alt={' Alt ' + item.name}
          />
        </div>

        <div className={ItemCardContent}>
          <span className={ItemCardName}>{item.name}</span>

          <span className={ItemCardPrice}>
            {CURRENCY}
            {item.price}
          </span>

          <p className={ItemCardInformation}>
            <span className={ItemCardType}>{item.category}</span>
            <span className={ItemCardRoundedDot} />
            <span className={ItemCardQuantity}>
              {0}
            </span>
          </p>
        </div>
      </div>
      {isOpen && (
        <animated.div
          style={{ opacity, height: isOpen ? 'auto' : height, transform }}
          ref={ref}
          className={ItemCardDetailsAnimatedWrapper}
        >
          <div className={ItemCardDetailsInformation}>
            <div className={ItemCardDetailsFullColumn}>
              <span className={ItemCardDetailsTitle}>Description</span>
              <span className={ItemCardDetailsInfo}>{item.description}</span>
            </div>
          </div>

          <div className={ItemCardCounterWrapper}>
            {count > 0 ? (
              <Counter
                value={count}
                className="ml-auto"
                onIncrement={() => {
                  addItem(item);
                }}
                onDecrement={() => removeItem(item)}
              />
            ) : (
              <Button
                size="small"
                className="ml-auto"
                onClick={() => addItem(item)}
              >
                Add To Cart
              </Button>
            )}
          </div>
        </animated.div>
      )}
    </div>
  );
};
export default ItemCard;
