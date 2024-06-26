import { InternalData, Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntGuideTour from '../../../src/GuideTour/index.axml';

export default ({
  list,
  baseVisible,
  props,
  slotVisible,
  moreVisible,
  controlledVisible,
  current,
  swiperVisible,
}: InternalData) => (
  <Page>
    <AntGuideTour
      items={[list[0]]}
      visible={baseVisible}
      onCancel="closeTour"
      onChange="onChange"
    />
    <AntGuideTour
      items={list}
      visible={moreVisible}
      onCancel="closeTour"
      onChange="onChange"
    />
    <AntGuideTour
      items={list}
      visible={swiperVisible}
      onCancel="closeTour"
      onChange="onChange"
      swiperable={true}
    />
    <AntGuideTour
      items={list}
      current={current}
      visible={controlledVisible}
      onCancel="closeTour"
      onChange="onChangeControlled"
    />
    {/* #if ALIPAY */}
    <AntGuideTour
      items={list}
      visible={slotVisible}
      onCancel="closeTour"
      onChange="onChange"
      jumpText='跳过'
      gotItText='知道了'
      prevStepText='上一步'
      nextStepText='下一步'
    >
      <View class="step-box" slot="step" slot-scope="props">
        step-{props.index}
      </View>
    </AntGuideTour>
    {/* #endif */}

    <AntContainer title="基础用法" className="list">
      <AntButton onTap="openTour" data-field="baseVisible">
        单图模式
      </AntButton>
      <AntButton onTap="openTour" data-field="moreVisible">
        多图模式
      </AntButton>
      <AntButton onTap="openTour" data-field="swiperVisible">
        滑动模式
      </AntButton>
      <AntButton onTap="openTour" data-field="controlledVisible">
        受控模式
      </AntButton>
    </AntContainer>

    {/* #if ALIPAY */}
    <AntContainer title="插槽用法" className="list">
      <AntButton onTap="openTour" data-field="slotVisible">
        开始
      </AntButton>
    </AntContainer>
    {/* #endif */}
  </Page>
);
