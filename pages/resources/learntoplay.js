import BaseTemplate from './../../components/Templates/BaseTemplate';

export const getStaticProps = async () => {
  return {
    redirect: {
      destination: 'https://www.youtube.com/watch?v=jnfqC_cbxvg',
      permanent: false,
    },
  };
};

export default function LearnToPlay() {
  return <BaseTemplate title="Resources" description="Learn to Play">
  </BaseTemplate>
};
