-- CreateTable
CREATE TABLE "Character" (
    "id" UUID NOT NULL,
    "mbti" VARCHAR NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterQuiz" (
    "id" UUID NOT NULL,
    "characterId" UUID,
    "answer" VARCHAR NOT NULL,
    "index" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CharacterQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterQuiz_characterId_index_key" ON "CharacterQuiz"("characterId", "index");

-- AddForeignKey
ALTER TABLE "CharacterQuiz" ADD CONSTRAINT "CharacterQuiz_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;
