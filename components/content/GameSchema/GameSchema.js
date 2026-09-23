import gameSchema from '../../../metadata/gameschema';

const GameSchema = () => (
  <script
    id="game-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(gameSchema),
    }}
  />
);

export default GameSchema;
