FROM golang:1.23.3-alpine AS builder

WORKDIR /fizmath

COPY go.mod go.sum ./

RUN go mod download

COPY ECHO ./

RUN go build  -v -o echoserve .

FROM scratch

COPY --from=builder /fizmath/echoserve /fizmath/echoserve

EXPOSE 4173

CMD ["/fizmath/echoserve"]