import {
  Button,
  Text,
  Card,
  Container,
  Grid,
  Spacer,
  Link,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { TiSocialTumbler, TiSocialTwitter } from "react-icons/ti";

function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  useEffect(getQuote, []);

  return (
    <Container
      display="flex"
      style={{ height: "100vh", maxWidth: "500px" }}
      alignItems="center"
    >
      <Card hoverable>
        <Grid.Container>
          <Grid>
            <Text h4>{quote}</Text>
          </Grid>
        </Grid.Container>
        <Spacer y={1} />
        <Grid.Container direction="row-reverse">
          <Grid>
            <Text h6>- {author}</Text>
          </Grid>
        </Grid.Container>
        <Spacer y={1} />
        <Grid.Container justify="space-between">
          <Grid>
            <Grid.Container gap={2} style={{ padding: "0" }}>
              <Grid style={{ padding: "0 6px" }}>
                <Link
                  target="_blank"
                  href={
                    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                    encodeURIComponent('"' + quote + '" ' + author)
                  }
                >
                  <TiSocialTwitter size="32px" />
                </Link>
              </Grid>
              <Grid style={{ padding: "0 6px" }}>
                <Link
                  target="_blank"
                  href={
                    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                    encodeURIComponent(author) +
                    "&content=" +
                    encodeURIComponent(quote) +
                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                  }
                >
                  <TiSocialTumbler size="32px" />
                </Link>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid>
            <Button onClick={getQuote} size="sm">
              new quote
            </Button>
          </Grid>
        </Grid.Container>
      </Card>
    </Container>
  );
}

export default Home;
